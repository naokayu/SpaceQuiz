<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<form action="LoginServlet" method="post">
  ユーザー名: <input type="text" name="username" required><br>
  パスワード: <input type="password" name="password" required><br>
  <input type="submit" value="ログイン">
  <% if (request.getParameter("error") != null) { %>
  <p style="color:red;">ユーザー名またはパスワードが違います。</p>
<% } %>
</form>
</body>
</html>