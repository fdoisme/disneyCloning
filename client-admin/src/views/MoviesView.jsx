import { RiAddCircleFill, RiDeleteBin5Fill } from "react-icons/ri"
import { PiMonitorPlayFill } from "react-icons/pi"
import { MdEditDocument } from "react-icons/md"
import { BiShowAlt } from "react-icons/bi"
import { FcRating } from "react-icons/fc"

export default function MoviesView() {
    return (
        <>
            <div className="container-movies">
                <div className="movies-wrapper">
                    <div className="movies">
                        <div className="movies-header">
                            <h1>Movie List</h1>
                            <h3><RiAddCircleFill /> Create Movie</h3>
                        </div>
                        <div className="movies-table">
                            <table className="content-table">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th className="table-title">Title</th>
                                        <th>Genre</th>
                                        <th className="table-rating">Rating</th>
                                        <th className="table-details">Details<br />(Synopsis and Image)</th>
                                        <th className="table-trailer">Trailer</th>
                                        <th>Author</th>
                                        <th className="table-action">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Title</td>
                                        <td>Genre</td>
                                        <td className="table-rating"><span><FcRating/></span>10</td>
                                        <td className="table-details"><span><BiShowAlt/></span></td>
                                        <td className="table-trailer"><span><PiMonitorPlayFill/></span></td>
                                        <td>Author</td>
                                        <td className="table-action"><span><MdEditDocument/></span><span><RiDeleteBin5Fill/></span></td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Title</td>
                                        <td>Genre</td>
                                        <td className="table-rating"><span><FcRating/></span>10</td>
                                        <td className="table-details"><span><BiShowAlt/></span></td>
                                        <td className="table-trailer"><span><PiMonitorPlayFill/></span></td>
                                        <td>Author</td>
                                        <td className="table-action"><span><MdEditDocument/></span><span><RiDeleteBin5Fill/></span></td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Title</td>
                                        <td>Genre</td>
                                        <td className="table-rating"><span><FcRating/></span>10</td>
                                        <td className="table-details"><span><BiShowAlt/></span></td>
                                        <td className="table-trailer"><span><PiMonitorPlayFill/></span></td>
                                        <td>Author</td>
                                        <td className="table-action"><span><MdEditDocument/></span><span><RiDeleteBin5Fill/></span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}