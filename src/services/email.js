let send_fun = {
    send: function (a) {
        return new Promise(function (n, e) {
            a.nocache = Math.floor(1e6 * Math.random() + 1);
            a.Action = "Send";
            var t = JSON.stringify(a);
            send_fun.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) })
        });
    },
    ajaxPost: function (e, n, t) {
        var a = send_fun.createCORSRequest("POST", e);
        console.log(a);
        a.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        a.onload = function () {
            var e = a.responseText;
            null != t && t(e)
        };
        a.send(n);
    },
    ajax: function (e, n) {
        var t = send_fun.createCORSRequest("GET", e);
        console.log(t)
        t.onload = function () {
            var e = t.responseText;
            null != n && n(e)
        };
        t.send()
    },
    createCORSRequest: function (e, n) {
        var t = new XMLHttpRequest();
        // console.log(t);
        return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XMLHttpRequest ? (t = new XMLHttpRequest()).open(e, n) :
            t = null, t
    }
};

const code = Math.floor(1000 + Math.random() * 9000);
var html = 
    `<html>
        <body>
            <table cellspacing="0" cellpadding="0" border="0" width="100%">
                <tbody>
                    <tr>
                        <td bgcolor="#f1f1f1">
                            <table cellspacing="0" cellpadding="0" border="0" width="600" align="center" style="font-family:Arial;font-size:14px">
                                <thead>
                                    <tr align="center">
                                        <td style="padding:20px 0"><a href="https://localhost/3000" target="_blank"><img src="https://kourses-codeigniter.qseksolutions.com/assets/front-end/images/logo-white.png" alt="Coinmage" height="50" class="CToWUd"></a></td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td bgcolor="#fff" style="padding:40px 20px;border-radius:4px;border-top:2px solid #8F69F8">
                                            <table cellspacing="0" cellpadding="0" border="0" width="100%">
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <h1 align="center" style="font-size:25px;margin:0">OTP</h1>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style="color:#666666;line-height:1.5;padding:20px 0">
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <table cellspacing="0" cellpadding="10" border="0" width="100%" style="border-color:#e1e1e1;color:#666666">
                                                                <tbody>
                                                                    <center>
                                                                        <p style="font-size:24px; width:200;">${code}</p>
                                                                    </center>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr align="center" style="color:#999999;font-size:13px">
                                        <td style="padding:20px 0">Copyright © 2019. KOURSES. All Rights Reserved.</td>
                                    </tr>
                                </tfoot>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
        </body>
    </html> `



export default { send_fun,html};