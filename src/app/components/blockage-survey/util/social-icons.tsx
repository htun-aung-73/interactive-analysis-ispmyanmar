import {
  FaFacebookF,
  FaYoutube,
  FaTiktok,
  FaLinkedinIn,
  FaMicrophone,
} from 'react-icons/fa'
import { FaXTwitter, FaTelegram } from 'react-icons/fa6'

const SocialIcons = () => {
  const iconSize = 15 // Adjust the size as needed
  return (
    <div className={'flex'}>
      <a
        href="https://www.facebook.com/ISPMyanmarpage/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebookF
          size={iconSize}
          className="mr-2 text-gray-500 hover:text-gray-700 hover:scale-110"
        />
      </a>
      <a
        href="https://twitter.com/ispmyanmar"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaXTwitter
          size={iconSize}
          className="mx-2 text-gray-500 hover:text-gray-700 hover:scale-110"
        />
      </a>
      <a
        href="https://www.youtube.com/channel/UCiTtQC5kx6uQsApT1O_uZDw"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaYoutube
          size={iconSize}
          className="mx-2 text-gray-500 hover:text-gray-700 hover:scale-110"
        />
      </a>
      <a
        href="https://www.tiktok.com/@isp_myanmar"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTiktok
          size={iconSize}
          className="mx-2 text-gray-500 hover:text-gray-700 hover:scale-110"
        />
      </a>
      <a
        href="https://www.linkedin.com/company/ispmyanmar/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedinIn
          size={iconSize}
          className="mx-2 text-gray-500 hover:text-gray-700 hover:scale-110"
        />
      </a>
      <a
        href="https://t.me/s/ispmyanmar"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTelegram
          size={iconSize}
          className="mx-2 text-gray-500 hover:text-gray-700 hover:scale-110"
        />
      </a>
      <a
        href="https://www.ispmyanmar.com/burmese/podcasts/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaMicrophone
          size={iconSize}
          className="mx-2 text-gray-500 hover:text-gray-700 hover:scale-110"
        />
      </a>
    </div>
  )
}

export default SocialIcons
