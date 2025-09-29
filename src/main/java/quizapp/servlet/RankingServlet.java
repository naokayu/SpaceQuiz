package quizapp.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet("/ranking")
public class RankingServlet extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("application/json; charset=UTF-8");

        try (Connection conn = DriverManager.getConnection("jdbc:sqlite:C:/sqlite/quiz.db")) {
            String sql = "SELECT username, score, played_at FROM scores ORDER BY score DESC, played_at ASC LIMIT 10";
            PreparedStatement stmt = conn.prepareStatement(sql);
            ResultSet rs = stmt.executeQuery();

            StringBuilder json = new StringBuilder();
            json.append("[");
            boolean first = true;
            while (rs.next()) {
                if (!first) json.append(",");
                json.append("{")
                    .append("\"username\":\"").append(rs.getString("username")).append("\",")
                    .append("\"score\":").append(rs.getInt("score")).append(",")
                    .append("\"played_at\":\"").append(rs.getString("played_at")).append("\"")
                    .append("}");
                first = false;
            }
            json.append("]");

            PrintWriter out = response.getWriter();
            out.print(json.toString());
            out.flush();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
