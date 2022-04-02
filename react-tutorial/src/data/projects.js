import { v4 as uuidv4 } from 'uuid';
import SimpliSafe from '../images/SimpliSafe.png';
import BROAD from '../images/BROAD.png';
import CapitalOne from '../images/CapitalOne.png';
import Cisco from '../images/Cisco.png';
import PowerAdvocate from '../images/PowerAdvocate.png';
import VMWare from '../images/vmware.png';
import WHOOP from '../images/whoop.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'SimpliSafe',
    desc:
      'NUWIT x SimpliSafe!',
    img: SimpliSafe,
  },
  {
    id: uuidv4(),
    name: 'BROAD Institute',
    desc:
      'NUWIT x BROAD Institute!',
    img: BROAD,
  },
  {
    id: uuidv4(),
    name: 'CapitalOne',
    desc:
      'NUWIT x CapitalOne!',
    img: CapitalOne,
  },
  {
    id: uuidv4(),
    name: 'Cisco',
    desc:
      'NUWIT x Cisco!',
    img: Cisco,
  },
  {
    id: uuidv4(),
    name: 'PowerAdvocate',
    desc:
      'NUWIT x PowerAdvocate!',
    img: PowerAdvocate,
  },
  {
    id: uuidv4(),
    name: 'VMWare',
    desc:
      'NUWIT x VMWare!',
    img: VMWare,
  },
  {
    id: uuidv4(),
    name: 'WHOOP',
    desc:
      'NUWIT x WHOOP!',
    img: WHOOP,
  },
];

export default projects;