<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ page import="java.sql.*" %>
<html>
<head>
    <meta charset="UTF-8">
    <title>スコア一覧</title>
</head>
<body>
    <h2>スコア一覧</h2>
    <table border="1" cellpadding="5" cellspacing="0">
        <tr>
            <th>ID</th>
            <th>ユーザー名</th>
            <th>スコア</th>
            <th>日時</th>
        </tr>
        <%
            try {
                Class.forName("org.sqlite.JDBC");
                Connection conn = DriverManager.getConnection("jdbc:sqlite:C:/sqlite/quiz.db");
                Statement stmt = conn.createStatement();
                ResultSet rs = stmt.executeQuery("SELECT * FROM scores ORDER BY played_at DESC");

                while (rs.next()) {
        %>
                    <tr>
                        <td><%= rs.getInt("id") %></td>
                        <td><%= rs.getString("username") %></td>
                        <td><%= rs.getInt("score") %></td>
                        <td><%= rs.getString("played_at") %></td>
                    </tr>
        <%
                }
                rs.close();
                stmt.close();
                conn.close();
            } catch (Exception e) {
                out.println("エラー: " + e.getMessage());
            }
        %>
    </table>

    <p><a href="index.html">クイズに戻る</a></p>
</body>
</html>
