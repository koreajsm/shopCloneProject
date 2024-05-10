/** @type {import('next').NextConfig} */
const nextConfig = {
    images : {
        domains : ['firebasestorage.googleapis.com']
    },
    compiler:{
        styledComponents : true
    }
};

export default nextConfig;
