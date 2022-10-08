const images = {
    logo: require('~/assets/images/logo.svg').default, // Là object, .default là truy cập vào key của nó
    noImage: require('~/assets/images/no-image.png'), // File png không cần .default, vì webpack xử lý khác nhau
};

export default images;
