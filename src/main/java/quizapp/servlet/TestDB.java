package quizapp.servlet;


		import java.sql.Connection;

		public class TestDB {
		    public static void main(String[] args) {
		        try (Connection conn = DBUtil.getConnection()) {
		            System.out.println("SQLiteに接続できました！");
		        } catch (Exception e) {
		            e.printStackTrace();
		        }
		    }
		


	}


