package quizapp.servlet;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DBUtil {
    // パスは / に統一したほうが安全
    private static final String URL = "jdbc:sqlite:C:/sqlite/quiz.db";

    public static Connection getConnection() throws SQLException {
        try {
            System.out.println("Loading SQLite driver...");
            Class.forName("org.sqlite.JDBC");
            System.out.println("Driver loaded OK!");
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
            throw new SQLException("SQLite JDBC Driver not found.", e);
        }

        System.out.println("Connecting to: " + URL);

        Connection conn = DriverManager.getConnection(URL);
        System.out.println("Connection OK: " + conn);
        return conn;
    }
}
