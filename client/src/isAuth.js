import Cookies from "js-cookie";
const jwt = Cookies.get("jwt");

export default  jwt ? { isLogin: true, token: jwt } : { isLogin: false, token: null };

