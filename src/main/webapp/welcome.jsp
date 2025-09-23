<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>ようこそ</title>
</head>
<body>
<%
    // セッションからユーザー名を取得
    String username = (String) session.getAttribute("username");
    if (username == null) {
        // ログインしていない場合はログイン画面へリダイレクト
        response.sendRedirect("login.jsp");
        return;
    }
%>

<h2><%= username %> さん、ようこそ！</h2>
<p>ログインに成功しました 🚀</p>

<!-- クイズページへ進むリンク -->
<a href="index.html">クイズを始める</a>

<!-- ログアウトボタン -->
<form action="LogoutServlet" method="post">
    <input type="submit" value="ログアウト">
</form>

</body>
</html>
