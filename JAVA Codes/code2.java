import java.util.*;
public class RomanToInteger {
    public static int romanToInt(String s) {
        if (s == null || s.length() == 0) {
            return 0;
        }
        char[] romanChars = {'I', 'V', 'X', 'L', 'C', 'D', 'M'};
        int[] romanValues = {1, 5, 10, 50, 100, 500, 1000};
        int result = 0;
        int prevValue = 0;
        for (int i = s.length() - 1; i >= 0; i--) {
            char currentChar = s.charAt(i);
            int currentValue = 0;
            for (int j = 0; j < romanChars.length; j++) {
                if (romanChars[j] == currentChar) {
                    currentValue = romanValues[j];
                    break;
                }
            }
            if (currentValue < prevValue) {
                result -= currentValue;
            } else {
                result += currentValue;
            }

            prevValue = currentValue;
        }

        return result;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String str = sc.nextLine();
        str = str.toUpperCase();
        int intValue = romanToInt(str);
        System.out.println("Integer value of Roman numeral " + str + " is: " + intValue);
    }
}