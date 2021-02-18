import 'bootstrap/dist/css/bootstrap.css';
import { MainFooter } from '../components/MainFooter.js';
import { MainNavBar } from '../components/MainNavBar.js';
import greenFile from '../images/greenFile.svg'

export const RoomHistoryPage = () => {
    return (
        <>
            <MainNavBar></MainNavBar>
            <div className="container">
                <div><p id="assignmentHistoryText">Assignment History</p></div>
                <div className="dropdownDiv d-flex justify-content-between">
                    <select className="form-select defaultOption" aria-label="Default select example">
                                <option defaultValue>Choose a nurse</option>
                                <option className="selectOption" value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                        </select>
                        <select className="form-select defaultOption" aria-label="Default select example">
                                <option defaultValue>Choose a room</option>
                                <option className="selectOption" value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                        </select>
                        <select className="form-select defaultOption" aria-label="Default select example">
                                <option defaultValue>Choose a date</option>
                                <option className="selectOption" value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                        </select>
                </div>
                <button className="float-right btn btn-success">Run</button>
                <div><p id="recentAssign">Recent Assignment History</p><img src={greenFile}/><a id="csvDownloadLink">Download All History CSV</a></div>
                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">Nurse</th>
                        <th scope="col">Room</th>
                        <th scope="col">Date</th>
                        <th scope="col">Start</th>
                        <th scope="col">End</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>1:21</td>
                        <td>1:21</td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>1:21</td>
                        <td>1:21</td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td >Larry the Bird</td>
                        <td>Thornton</td>
                        <td>1:21</td>
                        <td>1:21</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <MainFooter></MainFooter>
        </>
    );
}