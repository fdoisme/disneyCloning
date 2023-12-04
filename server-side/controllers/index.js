const { User, Movie, Genre, Cast, sequelize } = require("../models")
const bcrypt = require("bcrypt")
const { signToken } = require("../helpers/jwt")

class Controller {
    static async register(req, res, next) {
        try {
            const { username, email, password, phoneNumber, address } = req.body
            // const role = "admin"
            const user = await User.create({ username, email, password, phoneNumber, address })
            res.status(201).json(user)
        } catch (error) {
            console.log(error);
            next(error)
        }
    }
    static async login(req, res, next) {
        try {
            const { email, password } = req.body
            if (!email) {
                throw { name: "nullEmail" }
            } else if (!password) {
                throw { name: "nullPassword" }
            }
            const user = await User.findOne({ where: { email: email } })
            if (!user || !bcrypt.compareSync(password, user.password)) {
                throw { name: "failLogin" }
            }
            const access_token = signToken({ id: user.id, username: user.username, email: user.email })
            // console.log(verifyToken(token));
            user.dataValues.access_token = access_token
            // console.log(user);
            res.status(200).json(user)
        } catch (error) {
            console.log(error);
            next(error)
        }
    }
    static async movies(req, res, next) {
        try {
            const movies = await Movie.findAll({
                include: [User, Genre, Cast]
            })
            res.status(200).json(movies)
        } catch (error) {
            console.log(error);
            next(error)
        }
    }
    static async createMovie(req, res, next) {
        const t = await sequelize.transaction()
        try {
            const { title, synopsis, trailerUrl, imgUrl, bannerUrl, rating, genreId, casts } = req.body
            const slug = title.toLowerCase().split(' ').join('-')
            const auhtorId = req.user.id
            const movie = await Movie.create(
                { title, slug, synopsis, trailerUrl, imgUrl, bannerUrl, rating, genreId, auhtorId },
                { transaction: t }
            )
            const movieId = movie.dataValues.id
            if (casts.length < 3) {
                throw { name: "nameCast", message: `Minimum cast is 3, add ${3 - casts.length} cast more` }
            }
            const seedCast = casts.map((el, i) => {
                el.movieId = movieId
                if (!el.name) {
                    throw { name: "nameCast", message: `Name cast ${i + 1} required` }
                }
                return el
            })
            const cast = await Cast.bulkCreate(seedCast, { transaction: t })
            await t.commit()
            res.status(201).json({ message: "Success add movie" })
        } catch (error) {
            t.rollback()
            console.log(error);
            next(error)
        }
    }
    static async editMovie(req, res, next) {
        const t = await sequelize.transaction()
        try {
            const { id } = req.params
            const movie = await Movie.findOne({ where: { id: id }, transaction: t })
            if (!movie) {
                throw { name: "invalidId", message: `Id ${id} is invalid movie` }
            }
            const { title, synopsis, trailerUrl, imgUrl, bannerUrl, rating, genreId, casts } = req.body
            const slug = title.toLowerCase().split(' ').join('-')
            const auhtorId = req.user.id
            console.log({ title, slug, synopsis, trailerUrl, imgUrl, bannerUrl, rating, genreId, auhtorId, id });
            await Movie.update(
                { title, slug, synopsis, trailerUrl, imgUrl, bannerUrl, rating, genreId, auhtorId },
                {
                    where: { id: id },
                    transaction: t
                }
            )
            if (casts.length < 3) {
                throw { name: "nameCast", message: `Minimum cast is 3, add ${3 - casts.length} cast more` }
            }
            console.log(casts);
            for (const iterator of casts) {
                const id = iterator.id
                delete iterator.id
                const cast = await Cast.findOne({ where: { id: id } })
                if (!cast) {
                    throw { name: "invalidId", message: `Id ${id} is invalid cast` }
                }
                await Cast.update(iterator, { where: { id: id }, transaction: t })
            }
            await t.commit()
            res.status(201).json({ message: "Success edit movie" })
        } catch (error) {
            t.rollback()
            console.log(error);
            next(error)
        }
    }
    static async deleteMovie(req, res, next) {
        try {
            const { id } = req.params
            const movie = await Movie.findOne({ where: { id: id } })
            if (!movie) {
                throw { name: "invalidId", message: `Id ${id} is invalid movie` }
            }
            await Movie.destroy({ where: { id: id } })
            res.status(200).json({ message: "Delete movie success" })
        } catch (error) {
            console.log(error);
            next(error)
        }
    }
    static async genres(req, res, next) {
        try {
            const genres = await Genre.findAll()
            res.status(200).json(genres)
        } catch (error) {
            console.log(error);
            next(error)
        }
    }
    static async createGenres(req, res, next) {
        try {
            const { name } = req.body
            const genre = await Genre.create({ name })
            res.status(201).json({ message: "Success add genre" })
        } catch (error) {
            console.log(error);
            next(error)
        }
    }
    static async editGenres(req, res, next) {
        try {
            const { id } = req.params
            const { name } = req.body
            const genre = await Genre.findOne({ where: { id: id } })
            if (!genre) {
                throw { name: "invalidId", message: `Id ${id} is invalid Genre` }
            }
            await Genre.update({ name }, { where: { id: id } })
            res.status(200).json({ message: "Success edit genre" })
        } catch (error) {
            console.log(error);
            next(error)
        }
    }
    static async deleteGenres(req, res, next) {
        try {
            const { id } = req.params
            const genre = await Genre.findOne({ where: { id: id } })
            if (!genre) {
                throw { name: "invalidId", message: `Id ${id} is invalid Genre` }
            }
            await Genre.destroy({ where: { id: id } })
            res.status(200).json({ message: "Delete genre success" })
        } catch (error) {
            console.log(error);
            next(error)
        }
    }
    static async movie(req, res, next) {
        try {
            const { id } = req.params
            const movie = await Movie.findOne({
                where: { id: id },
                include: [Cast, Genre]
            })
            if (!movie) {
                throw { name: "invalidId", message: `Id ${id} is invalid movie` }
            }
            res.status(200).json(movie)
        } catch (error) {
            console.log(error);
            next(error)
        }
    }
}

module.exports = Controller