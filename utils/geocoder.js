import NodeGeocoder from "node-geocoder";
import dotenv from "dotenv";
dotenv.config({path: '../config/config.env'});

const options = {
    apiKey: 'VbnuMyc47ciOpptwwYLGSH3v7a2mNwCF',
    provider: 'mapquest',
    formatter: null
};

const geocoder = NodeGeocoder(options);
export default geocoder;