package quizapp.servlet;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DBUtil {
    private static final String URL = "jdbc:mysql://localhost:3306/quizdb?useSSL=false&serverTimezone=UTC";
    private static final String USER = "root"; // MySQLのユーザー名
    private static final String PASSWORD = "pass"; // あなたのMySQLパスワード

    public static Connection getConnection() throws SQLException {
        try {
            System.out.println("Loading MySQL driver...");
            Class.forName("com.mysql.cj.jdbc.Driver");
            System.out.println("Driver loaded OK!");
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
            throw new SQLException("MySQL JDBC Driver not found.", e);
        }

        System.out.println("Connecting to: " + URL);
        Connection conn = DriverManager.getConnection(URL, USER, PASSWORD);
        System.out.println("Connection OK: " + conn);
        return conn;
    }
}