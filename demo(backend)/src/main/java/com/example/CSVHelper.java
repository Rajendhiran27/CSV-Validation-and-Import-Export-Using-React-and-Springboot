package com.example.demo;

import java.io.BufferedReader;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.apache.commons.csv.CSVFormat;
import org.apache.commons.csv.CSVParser;
import org.apache.commons.csv.CSVPrinter;
import org.apache.commons.csv.CSVRecord;
import org.apache.commons.csv.QuoteMode;
import org.springframework.web.multipart.MultipartFile;


public class CSVHelper {
  public static String TYPE = "text/csv";
  static String[] HEADERs = { "id","firstname", "lastname", "email", "password","phoneNumber" };

  public static boolean hasCSVFormat(MultipartFile file) {
 System.out.println(file.getContentType());
    if (TYPE.equals(file.getContentType())
    		|| file.getContentType().equals("application/vnd.ms-excel")) {
      return true;
    }

    return false;
  }

  public static List<DeveloperTutorial> csvToTutorials(InputStream is) {
    try (BufferedReader fileReader = new BufferedReader(new InputStreamReader(is, "UTF-8"));
        CSVParser csvParser = new CSVParser(fileReader,
            CSVFormat.DEFAULT.withFirstRecordAsHeader().withIgnoreHeaderCase().withTrim());) {

      List<DeveloperTutorial> developerTutorialList = new ArrayList<>();

      Iterable<CSVRecord> csvRecords = csvParser.getRecords();

      for (CSVRecord csvRecord : csvRecords) {
        DeveloperTutorial developerTutorial =new DeveloperTutorial(
          Long.parseLong(csvRecord.get("id")),
          csvRecord.get("firstname"),
          csvRecord.get("lastname"),
          csvRecord.get("email"),
          csvRecord.get("password"),
          csvRecord.get("phonenumber")
        );
    	  // DeveloperTutorial developerTutorial = new DeveloperTutorial(
        //       Long.parseLong(csvRecord.get("Id")),
        //       csvRecord.get("Title"),
        //       csvRecord.get("Description"),
        //       Boolean.parseBoolean(csvRecord.get("Published"))
        //     );

    	  developerTutorialList.add(developerTutorial);
      }

      return developerTutorialList;
    } catch (IOException e) {
      throw new RuntimeException("fail to parse CSV file: " + e.getMessage());
    }
  }

  public static ByteArrayInputStream tutorialsToCSV(List<DeveloperTutorial> developerTutorialList) {
    final CSVFormat format = CSVFormat.DEFAULT.withQuoteMode(QuoteMode.MINIMAL);

    try (ByteArrayOutputStream out = new ByteArrayOutputStream();
        CSVPrinter csvPrinter = new CSVPrinter(new PrintWriter(out), format);) {
      for (DeveloperTutorial developerTutorial : developerTutorialList) {
        List<Object> data = Arrays.asList(
              // String.valueOf(developerTutorial.getId()),
              developerTutorial.getFirstname(),
              developerTutorial.getLastname(),
              developerTutorial.getEmail(),
              developerTutorial.getPassword(),
              developerTutorial.getPhonenumber()
              // String.valueOf(developerTutorial.isPublished())
            );

        csvPrinter.printRecord(data);
      }

      csvPrinter.flush();
      return new ByteArrayInputStream(out.toByteArray());
    } catch (IOException e) {
      throw new RuntimeException("fail to import data to CSV file: " + e.getMessage());
    }
  }
}
// import java.io.BufferedReader;
// import java.io.ByteArrayInputStream;
// import java.io.ByteArrayOutputStream;
// import java.io.IOException;
// import java.io.InputStream;
// import java.io.InputStreamReader;
// import java.io.PrintWriter;
// import java.util.ArrayList;
// import java.util.Arrays;
// import java.util.List;

// import org.apache.commons.csv.CSVFormat;
// import org.apache.commons.csv.CSVParser;
// import org.apache.commons.csv.CSVPrinter;
// import org.apache.commons.csv.CSVRecord;
// import org.apache.commons.csv.QuoteMode;
// import org.springframework.web.multipart.MultipartFile;


// public class CSVHelper {
//   public static String TYPE = "text/csv";
//   static String[] HEADERs = { "Id", "Title", "Description", "Published" };

//   public static boolean hasCSVFormat(MultipartFile file) {
//  System.out.println(file.getContentType());
//     if (TYPE.equals(file.getContentType())
//     		|| file.getContentType().equals("application/vnd.ms-excel")) {
//       return true;
//     }

//     return false;
//   }

//   public static List<DeveloperTutorial> csvToTutorials(InputStream is) {
//     try (BufferedReader fileReader = new BufferedReader(new InputStreamReader(is, "UTF-8"));
//         CSVParser csvParser = new CSVParser(fileReader,
//             CSVFormat.DEFAULT.withFirstRecordAsHeader().withIgnoreHeaderCase().withTrim());) {

//       List<DeveloperTutorial> developerTutorialList = new ArrayList<>();

//       Iterable<CSVRecord> csvRecords = csvParser.getRecords();

//       for (CSVRecord csvRecord : csvRecords) {
//     	  DeveloperTutorial developerTutorial = new DeveloperTutorial(
//               Long.parseLong(csvRecord.get("Id")),
//               csvRecord.get("Title"),
//               csvRecord.get("Description"),
//               Boolean.parseBoolean(csvRecord.get("Published"))
//             );

//     	  developerTutorialList.add(developerTutorial);
//       }

//       return developerTutorialList;
//     } catch (IOException e) {
//       throw new RuntimeException("fail to parse CSV file: " + e.getMessage());
//     }
//   }

//   public static ByteArrayInputStream tutorialsToCSV(List<DeveloperTutorial> developerTutorialList) {
//     final CSVFormat format = CSVFormat.DEFAULT.withQuoteMode(QuoteMode.MINIMAL);

//     try (ByteArrayOutputStream out = new ByteArrayOutputStream();
//         CSVPrinter csvPrinter = new CSVPrinter(new PrintWriter(out), format);) {
//       for (DeveloperTutorial developerTutorial : developerTutorialList) {
//         List<String> data = Arrays.asList(
//               String.valueOf(developerTutorial.getId()),
//               developerTutorial.getTitle(),
//               developerTutorial.getDescription(),
//               String.valueOf(developerTutorial.isPublished())
//             );

//         csvPrinter.printRecord(data);
//       }

//       csvPrinter.flush();
//       return new ByteArrayInputStream(out.toByteArray());
//     } catch (IOException e) {
//       throw new RuntimeException("fail to import data to CSV file: " + e.getMessage());
//     }
//   }
// }