// kakao Login
const CLIENT_ID = process.env.REACT_APP_KAKAO_ID;
const REDIRECT_URI = "https://ossack.shop/user/kakao/callback";
//const REDIRECT_URI = "http://localhost:3000/user/kakao/callback";

// google Login
const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_ID;
const GOOGLE_REDIRECT_URI = "https://ossack.shop/user/google/callback";
//const GOOGLE_REDIRECT_URI = "http://localhost:3000/user/google/callback";

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
export const GOOGLE_AUTH_URL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${GOOGLE_REDIRECT_URI}&response_type=code&scope=email%20profile%20openid&access_type=offline`;
