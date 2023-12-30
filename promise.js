const promise = new Promise((resolve, reject) => {
  let request = new XMLHttpRequest();
  request.onload = () => {
    resolve();
  };
});
promise
  .then(() => console.log("Finally finished"))
  .then(() => console.log("Congratulation!!"))
  .catch(() => console.log("Unfortunately, failled"));
console.log(promise);

const url =
  "https://www.wanted.co.kr/jobsfeed?utm_source=google&utm_medium=sa&utm_campaign=kr_recruit_web_sa_signup_brand&utm_term=%EC%9B%90%ED%8B%B0%EB%93%9C&utm_content=brand_new&gclid=Cj0KCQjw0IGnBhDUARIsAMwFDLmxPjftchj5KYydb9ipjyknim5gMbDzuOssdCV0sBdlcxLc2xykQrcaAk7rEALw_wcB";

const data = fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(data));

console.log(data);
