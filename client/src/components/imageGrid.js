// client/src/components/ImageGrid.js
import React from 'react';
import Swal from 'sweetalert2';
import moment from 'moment';

const ImageGrid = ({ images }) => {
  let swalTrigger = (title, image, tags, published, author) => {
    title = title ? title : 'No Title';
    tags = tags ? tags : 'No Tags';
    published = published ? published : 'No Publsihed Date';
    author = author ? author : 'No Author';
    Swal.fire({
      title: title !== ' ' ? title : 'No Title',
      html: `
      <table>
        <tr>
          <th>Tags</th>
          <td>: ${tags}</td>
        </tr>
        <tr>
          <th>Published</th>
          <td>: ${moment(published).format('LL')}</td>
        </tr>
        <tr>
          <th>Author</th>
          <td>: ${author}</td>
        </tr>
      </table>`,
      imageUrl: image,
      imageWidth: '65%',
      imageAlt: title
    });
  };

  return (
    <div className="photo-grid">
      {images.length ? images.map((image) => (
        <div className="photo-item" onClick={() => swalTrigger(image.title, image.media.m, image.tags, image.published, image.author)}>
          <img src={image.media.m} alt={image.title} />
          <p>{image.title !== ' ' ? image.title : 'No Title'}</p>
        </div>
      )): <p style={{ columnSpan: 'all', height: '45vh' }}>Result not found.</p>}
    </div>
  );
};

export default ImageGrid;
