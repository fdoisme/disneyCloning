import { RiAddCircleFill, RiDeleteBin5Fill } from "react-icons/ri"
import { PiMonitorPlayFill } from "react-icons/pi"
import { MdEditDocument } from "react-icons/md"
import { BiShowAlt } from "react-icons/bi"
import { FcRating } from "react-icons/fc"

export default function Genres() {
    return (
        <>
            <div className="container-movies">
                <div className="movies-wrapper">
                    <div className="movies">
                        <div className="movies-header">
                            <h1>Genre List</h1>
                            <h3><RiAddCircleFill /> Create Genre</h3>
                        </div>
                        <div className="movies-table">
                            <table className="content-table">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th className="table-title">Name</th>
                                        <th >Created At</th>
                                        <th >Updated At</th>
                                        <th className="table-action">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Name</td>
                                        <td>Created At</td>
                                        <td>Updated At</td>
                                        <td className="table-action"><span><MdEditDocument/></span><span><RiDeleteBin5Fill/></span></td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Name</td>
                                        <td>Created At</td>
                                        <td>Updated At</td>
                                        <td className="table-action"><span><MdEditDocument/></span><span><RiDeleteBin5Fill/></span></td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Name</td>
                                        <td>Created At</td>
                                        <td>Updated At</td>
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