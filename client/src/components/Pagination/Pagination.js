import React, { Component } from 'react'

export class Pagination extends Component {
    render() {
        const { pageSize, total, paginate, nextPage, prevPage,pageIndex } = this.props;

        const pageNumbers = [];

        for (let i = 1; i <= Math.ceil(total / pageSize); i++) {
            pageNumbers.push(i);
        }

        return (
            <nav>
                <ul className="pagination justify-content-center">
                    <li className="page-item">
                        <a className="page-link" onClick={() => prevPage()}>Previous</a>
                    </li>
                    {pageNumbers.map(num => (
                        <li className={pageIndex === num? "page-item active": 'page-tem'} key={num}>
                            <a onClick={() => paginate(num)}  className="page-link">{num}</a>
                        </li>
                    ))}
                    <li className="page-item">
                        <a className="page-link" onClick={() => nextPage()}>Next</a>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Pagination