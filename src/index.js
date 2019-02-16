import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let myToken = sessionStorage.getItem('myToken');
if(!myToken)
    sessionStorage.setItem('myToken', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImUxMzgzMDU2YTc1OTRjOTFhMmRmYWEyNDRkN2E0NzZkNjhlMzJiNmE4Mjg2YTM0ODYzZjJlMDllMmE0YmRjNmYwMGRjNzcwMmRlMDI3ZDg5In0.eyJhdWQiOiIzIiwianRpIjoiZTEzODMwNTZhNzU5NGM5MWEyZGZhYTI0NGQ3YTQ3NmQ2OGUzMmI2YTgyODZhMzQ4NjNmMmUwOWUyYTRiZGM2ZjAwZGM3NzAyZGUwMjdkODkiLCJpYXQiOjE1NTAwMTU5MDMsIm5iZiI6MTU1MDAxNTkwMywiZXhwIjoxNTUwMTAyMzAzLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.hESunaD4fyX8rSRSgDXXo3VYbZ0-LIJ7n7Fg_blS0AXYera1GsyMwAPKAD8ZWNEfX_olrnzigvgzpJqnnAuIPIStmrlfeNNustxLCYZR7LKf7Cx2M3QqXqHLpDL7kMnAJ1r9I1FtzWs-kHBudqHiLgNajoF6DwgKyNql9LmmAbu0IDRWgMFpoq8GiBQOb6DV4ud--jsFKddHkn7xU3ErUZGsOgxs3YRLhk7sQu9cs2Ksjm0XkQzxxVPmR84GClRb6Ob0helCk0gz82cFwHW-B1ec5AKd3__hdMVbidp7CL6W1HWzTDRGaAqk63M94TjX6FnrWF4Rl3ikKyF8susBqoOwZmZ6mX3VF2zx0zssE4vqZaB87v-D6P5nCtJsWct5-FXZUEpnUIR9Dhp_zqF_OInteZecZcQlR8KzGTKXIVpuGZ5Hmwx8cQtbIsrrb2N7eBskx7DShX-tRFCI_i7fNTq26qIjK3tnsi4ZBmB16IqJc1trHOgw0dnvkX96fA0QcWUbX9Bv26-NZFTLZBfjEjfTveS963RV_vq3Grm-CrxNOAXrsFxQOcMpecNFVYDJlM4SkIsEnnbuWL08nvT1wvl_FE8k2yR2RmOj1q_szUDPEerDMbPo7pj95tBceeGBKx0Rl4qFhHURhMIsu7ObuB-K4pyI1-EdVh0g1ugZCvw');

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
