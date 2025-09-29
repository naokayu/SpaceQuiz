<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ page import="java.sql.*" %>
<html>
<head>
    <meta charset="UTF-8">
    <title>ランキング - トップ10</title>
</head>
<body>
    <h2>スコアランキング（トップ10）</h2>
    <table border="1" cellpadding="5" cellspacing="0">
        <tr>
            <th>順位</th>
            <th>ユーザー名</th>
            <th>スコア</th>
            <th>日時</th>
        </tr>
        <%
            try {
                Class.forName("org.sqlite.JDBC");
                Connection conn = DriverManager.getConnection("jdbc:sqlite:C:/sqlite/quiz.db");
                Statement stmt = conn.createStatement();
                
                // スコア順に並べて、上位10件だけ取得
                ResultSet rs = stmt.executeQuery(
                    "SELECT username, score, played_at FROM scores ORDER BY score DESC, played_at ASC LIMIT 10"
                );

                int rank = 1; // 順位カウンタ
                while (rs.next()) {
        %>
                    <tr>
                        <td><%= rank %></td>
                        <td><%= rs.getString("username") %></td>
                        <td><%= rs.getInt("score") %></td>
                        <td><%= rs.getString("played_at") %></td>
                    </tr>
        <%
                    rank++;
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
