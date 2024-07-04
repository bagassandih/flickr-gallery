// client/src/components/SearchBox.js
import Swal from 'sweetalert2';

const Footer = () => {
  const toast = () => {
    Swal.bindClickHandler();
    Swal.mixin({
      toast: true,
      title: 'Email',
      text: 'Send email to bagassandi13@gmail.com'
    }).bindClickHandler("data-swal-toast-template");
  };

  return (
    <div className='footer'>
        <p>
          © 2024 Bagas Arisandi | Reach me on 
          </p>
          <div className='img-container'>
          <a href='https://www.linkedin.com/in/bagassandih/' target='_blank' rel="noopener noreferrer">
            <img src={process.env.PUBLIC_URL + '/img/linkedin-logo.webp'} alt='linkedin' />
          </a>
          <a href='https://github.com/bagassandih' target='_blank' rel="noopener noreferrer">
            <img src={process.env.PUBLIC_URL + '/img/github-logo.png'} alt='github' />
          </a>
          <a data-swal-toast-template="#my-template" onClick={toast} href='mailto:bagassandi13@gmail.com'>
            <img src={process.env.PUBLIC_URL + '/img/email-logo.png'} alt='email' />
          </a>
          </div>
    </div>
  );
};

export default Footer;
