import React from 'react';
import './Library.css'; 

const Library = () => {
    return (
        <div className="library-container">
            <h1>Our Library</h1>
            <img src="https://farm1.staticflickr.com/130/376152628_249e3630c0_o_d.jpg" alt="Library" className="library-image" />
            <div className="library-info">
                <p>
                    The library is a vital part of any educational institution, offering a wide range of resources and services to support learning, research, and personal development.
                </p>
                <h2>Key Aspects of a Library:</h2>
                <ol>
                    <li><strong>Collection:</strong> Libraries house a collection of books, journals, magazines, newspapers, and other materials. The collection may also include electronic resources such as e-books, databases, and online journals.</li>
                    <li><strong>Cataloging and Classification:</strong> To help users locate materials, libraries organize their collections using cataloging and classification systems. The most common system is the Dewey Decimal Classification for books.</li>
                    <li><strong>Services:</strong> Libraries offer various services to their users, such as reference services, circulation services (borrowing and returning materials), interlibrary loan services, and access to computers and the internet.</li>
                    <li><strong>Study Spaces:</strong> Libraries provide quiet study spaces for individuals or group study rooms for collaborative work. Some libraries also offer amenities like cafes and seating areas for relaxation.</li>
                    <li><strong>Special Collections:</strong> Many libraries have special collections that contain rare, valuable, or unique materials. These collections often require special handling and may have restricted access.</li>
                    <li><strong>Digital Libraries:</strong> With the advancement of technology, many libraries now offer digital collections and services, including access to e-books, online databases, and digital archives.</li>
                    <li><strong>Library Staff:</strong> Librarians and library staff play a crucial role in helping users find information, navigate the library's resources, and make the best use of its services.</li>
                </ol>
                <p>
                    Overall, libraries serve as hubs of knowledge and information, providing resources and support to enhance learning and research.
                </p>
            </div>
        </div>
    );
}

export default Library;