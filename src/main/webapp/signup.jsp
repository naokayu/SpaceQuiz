
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>新規登録</title>
</head>
<body>
    <h2>新規ユーザー登録</h2>
    <form action="signup" method="post">
        ユーザー名: <input type="text" name="username" required><br>
        パスワード: <input type="password" name="password" required><br>
        <input type="submit" value="登録">
    </form>
</body>
</html>
