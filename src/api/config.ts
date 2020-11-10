import axios from 'axios';
import {API_KEY, API_SECRET} from '../constants/config';

axios.defaults.headers.get['x-key'] = API_KEY;
axios.defaults.headers.get['x-secret'] = API_SECRET;