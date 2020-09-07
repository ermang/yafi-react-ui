
const BASE_URL = "http://localhost:8080";
const TOPIC_POPULAR = BASE_URL + "/topic/popular";
const LOGIN_URL = BASE_URL + "/login";
const THREAD_RECENT_URL = BASE_URL + "/thread/recent";
const CREATE_THREAD_URL = BASE_URL + "/thread";
const READ_THREADS_BY_TOPIC_ID_URL = BASE_URL + "/thread/topic/";

const Constant = {
                    "BASE_URL":  BASE_URL,
                    "TOPIC_POPULAR": TOPIC_POPULAR,
                    "LOGIN": LOGIN_URL,
                    "THREAD_RECENT_URL": THREAD_RECENT_URL,
                    "CREATE_THREAD_URL": CREATE_THREAD_URL,
                    "READ_THREADS_BY_TOPIC_ID_URL": READ_THREADS_BY_TOPIC_ID_URL,
                    "LIKE_THREAD_URL": BASE_URL.concat('/thread/like')
                 };

export default Constant;