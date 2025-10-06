package quizapp.servlet;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet("/signup")
public class SignupServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        request.setCharacterEncoding("UTF-8");
        response.setContentType("text/html; charset=UTF-8");

        String username = request.getParameter("username");
        String password = request.getParameter("password");

        System.out.println("Connecting to MySQL...");

        try {
            // MySQL JDBCドライバをロード
            Class.forName("com.mysql.cj.jdbc.Driver");

            // MySQLに接続
            try (Connection conn = DriverManager.getConnection(
                    "jdbc:mysql://localhost:3306/quizdb?useSSL=false&serverTimezone=UTC",
                    "root", // あなたのMySQLユーザー名
                    "pass"  // あなたのMySQLパスワード
            )) {
                // 同じユーザー名が存在するか確認
                PreparedStatement check = conn.prepareStatement("SELECT * FROM users WHERE username=?");
                check.setString(1, username);
                ResultSet rs = check.executeQuery();

                if (rs.next()) {
                    response.getWriter().println("そのユーザー名は既に使われています。<a href='signup.jsp'>戻る</a>");
                } else {
                    PreparedStatement stmt = conn.prepareStatement(
                            "INSERT INTO users(username, password) VALUES(?, ?)");
                    stmt.setString(1, username);
                    stmt.setString(2, password);
                    stmt.executeUpdate();

                    response.getWriter().println("登録完了！<a href='login.jsp'>ログインはこちら</a>");
                }
            }
        } catch (Exception e) {
            e.printStackTrace(response.getWriter());
        }
    }
}