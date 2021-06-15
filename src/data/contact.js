import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faTelegram } from '@fortawesome/free-brands-svg-icons/faTelegram';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faEthereum } from '@fortawesome/free-brands-svg-icons/faEthereum';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const data = [
  {
    link: 'https://www.linkedin.com/in/canalesclaudio',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'https://twitter.com/klaudioz',
    label: 'Twitter',
    icon: faTwitter,
  },
  {
    link: 'https://github.com/klaudioz',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://t.me/DevOps_Claudio',
    label: 'Telegram',
    icon: faTelegram,
  },
  {
    link: 'https://klaudioz.eth',
    label: 'Ethereum',
    icon: faEthereum,
  },
  {
    link: 'mailto:klaudioz@gmail.com',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
