export const loginDetails = (
  name: string,
  loginDetail: { username: string; password: string },
) => {
  return ` <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html> 

<head>
  <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
  <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
  <style>
    a,
    a:link,
    a:visited {
      text-decoration: none;
      color: #00788a;
    }

    a:hover {
      text-decoration: underline;
    }

    h2,
    h2 a,
    h2 a:visited,
    h3,
    h3 a,
    h3 a:visited,
    h4,
    h5,
    h6,
    .t_cht {
      color: #000 !important;
    }

    .ExternalClass p,
    .ExternalClass span,
    .ExternalClass font,
    .ExternalClass td {
      line-height: 100%;
    }

    .ExternalClass {
      width: 100%;
    }
  </style>
</head>

<body style="font-size: 1.25rem;font-family: 'Roboto', sans-serif;padding-left:20px;padding-right:20px;padding-top:20px;padding-bottom:20px; background-color: #FAFAFA; width: 75%; max-width: 1280px; min-width: 600px; margin-right: auto; margin-left: auto">
  <table cellpadding="12" cellspacing="0" width="100%" bgcolor="#FAFAFA" style="border-collapse: collapse;margin: auto">
    <thead>
      <tr>
        <td style="padding-left: 0; padding-right: 0">
          <img src="cid:wave" style="width:80%; max-width:750px" />
        </td>
      </tr>
      <tr>
        <td style="text-align:center; padding-bottom: 20px">
        <img src="cid:logo" style="width:20vw;  mix-blend-mode: difference;
;max-width:750px" />

        </td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding: 50px; background-color: #fff">
          <table width="100%">
            <tr>
              <td style="text-align:center">
                <h1 style="font-size: 30px; color: #202225; margin-top: 0;">Welcome aboard ${name}</h1>
                <h2 style="font-size: 30px; color: #202225; margin-top: 0;">Here is your login details:</h2>
                <div style="padding:20px;background-color:#202225;width:max-content; margin:auto; color:white;text-align:left">
                <p style="font-size: 18px; margin-bottom: 30px;  max-width: 60ch; margin-left: auto; margin-right: auto">Username:${
                  loginDetail.username
                }</p>
                <p style="font-size: 18px; margin-bottom: 30px; max-width: 60ch; margin-left: auto; margin-right: auto">Password:${
                  loginDetail.password
                }</p>
                </div>
                <a style="background-color: #1755F5; color: #fff; padding: 8px 24px; border-radius: 4px; border-style: solid; border-color: #1755F5; font-size: 14px; text-decoration: none; cursor: pointer; display: block;width: max-content; margin: 10px auto;" href=${'#'}>Go to EduHub</a>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td style="padding-bottom: 0">
          <img src="cid:girl" style="width:80%; max-width:750px" />
        </td>
      </tr>
      <tr>
        <td style="text-align: center;color:#B6B6B6; font-size: 18px">You received this email because you signed up for EduHub.<br> © ${new Date().getFullYear()} EduHub, All rights reserved.</td>
      </tr>
    </tfoot>
  </table>
</body>
</html>
 `;
};
