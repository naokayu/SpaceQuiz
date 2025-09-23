package quizapp.servlet;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

@WebServlet("/saveScore")
public class SaveScoreServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        request.setCharacterEncoding("UTF-8");

        // セッションからユーザー名を取得（ログイン時に保存しておく想定）
        HttpSession session = request.getSession();
        String username = (String) session.getAttribute("username");

        // フォームやリクエストからスコアを取得
        int score = Integer.parseInt(request.getParameter("score"));

        try {
            Class.forName("org.sqlite.JDBC");
            try (Connection conn = DriverManager.getConnection("jdbc:sqlite:C:/sqlite/quiz.db")) {
            	PreparedStatement stmt = conn.prepareStatement(
            		    "INSERT INTO scores(username, score, played_at) VALUES(?, ?, datetime('now'))"
            		);
            		stmt.setString(1, username);
            		stmt.setInt(2, score);
            		stmt.executeUpdate();

            }
            response.setContentType("text/html; charset=UTF-8");
            response.setCharacterEncoding("UTF-8");

            response.getWriter().println("スコア保存完了！<a href='viewScores.jsp'>スコア一覧を見る</a>");

            

        } catch (Exception e) {
            e.printStackTrace(response.getWriter());
        }
    }
}
