import java.util.Comparator;

public class BinarySearch {

    /**
     * Iterative binary search for integers
     * 
     * @param arr    sorted array to search in
     * @param target element to find
     * @return index of target if found, -1 otherwise
     * @throws IllegalArgumentException if array is null
     */
    public static int binarySearch(int[] arr, int target) {
        if (arr == null) {
            throw new IllegalArgumentException("Array cannot be null");
        }

        int left = 0;
        int right = arr.length - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2; // Prevents overflow

            if (arr[mid] == target) {
                return mid; // Element found
            }

            if (arr[mid] < target) {
                left = mid + 1; // Search right half
            } else {
                right = mid - 1; // Search left half
            }
        }

        return -1; // Element not found
    }

    /**
     * Generic binary search with custom comparator
     * 
     * @param <T>        the type of elements in the array
     * @param arr        sorted array to search in
     * @param target     element to find
     * @param comparator for comparing elements
     * @return index of target if found, -1 otherwise
     */
    public static <T> int binarySearch(T[] arr, T target, Comparator<T> comparator) {
        if (arr == null || target == null || comparator == null) {
            throw new IllegalArgumentException("Arguments cannot be null");
        }

        int left = 0;
        int right = arr.length - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2;

            int comparison = comparator.compare(arr[mid], target);

            if (comparison == 0) {
                return mid; // Element found
            }

            if (comparison < 0) {
                left = mid + 1; // Search right half
            } else {
                right = mid - 1; // Search left half
            }
        }

        return -1; // Element not found
    }

    /**
     * Recursive binary search for integers
     * 
     * @param arr    sorted array to search in
     * @param target element to find
     * @param left   left boundary of search range
     * @param right  right boundary of search range
     * @return index of target if found, -1 otherwise
     */
    public static int binarySearchRecursive(int[] arr, int target, int left, int right) {
        if (arr == null) {
            throw new IllegalArgumentException("Array cannot be null");
        }

        if (left > right) {
            return -1; // Element not found
        }

        int mid = left + (right - left) / 2; // Prevents overflow

        if (arr[mid] == target) {
            return mid; // Element found
        }

        if (arr[mid] < target) {
            return binarySearchRecursive(arr, target, mid + 1, right);
        } else {
            return binarySearchRecursive(arr, target, left, mid - 1);
        }
    }

    /**
     * Find the insertion point for a target in a sorted array
     * 
     * @param arr    sorted array
     * @param target element to find insertion point for
     * @return index where target should be inserted to maintain sorted order
     */
    public static int findInsertionPoint(int[] arr, int target) {
        if (arr == null) {
            throw new IllegalArgumentException("Array cannot be null");
        }

        int left = 0;
        int right = arr.length;

        while (left < right) {
            int mid = left + (right - left) / 2;

            if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        return left;
    }

    /**
     * Find the first occurrence of target in a sorted array with duplicates
     * 
     * @param arr    sorted array (may contain duplicates)
     * @param target element to find
     * @return index of first occurrence, -1 if not found
     */
    public static int findFirstOccurrence(int[] arr, int target) {
        if (arr == null) {
            throw new IllegalArgumentException("Array cannot be null");
        }

        int left = 0;
        int right = arr.length - 1;
        int result = -1;

        while (left <= right) {
            int mid = left + (right - left) / 2;

            if (arr[mid] == target) {
                result = mid;
                right = mid - 1; // Continue searching left for first occurrence
            } else if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return result;
    }

    /**
     * Find the last occurrence of target in a sorted array with duplicates
     * 
     * @param arr    sorted array (may contain duplicates)
     * @param target element to find
     * @return index of last occurrence, -1 if not found
     */
    public static int findLastOccurrence(int[] arr, int target) {
        if (arr == null) {
            throw new IllegalArgumentException("Array cannot be null");
        }

        int left = 0;
        int right = arr.length - 1;
        int result = -1;

        while (left <= right) {
            int mid = left + (right - left) / 2;

            if (arr[mid] == target) {
                result = mid;
                left = mid + 1; // Continue searching right for last occurrence
            } else if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return result;
    }

    public static void main(String[] args) {
        // Test data
        int[] sortedArray = { 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 };
        int[] arrayWithDuplicates = { 1, 2, 2, 2, 5, 6, 7, 7, 8, 9 };
        String[] names = { "Alice", "Bob", "Charlie", "David", "Eve" };

        System.out.println("=== Basic Binary Search Tests ===");

        // Test iterative binary search
        int target = 7;
        int result1 = binarySearch(sortedArray, target);
        System.out.println("Iterative search for " + target + ": " +
                (result1 != -1 ? "found at index " + result1 : "not found"));

        // Test recursive binary search
        int result2 = binarySearchRecursive(sortedArray, target, 0, sortedArray.length - 1);
        System.out.println("Recursive search for " + target + ": " +
                (result2 != -1 ? "found at index " + result2 : "not found"));

        // Test element not in array
        int notFound = 20;
        int result3 = binarySearch(sortedArray, notFound);
        System.out.println("Search for " + notFound + ": " +
                (result3 != -1 ? "found at index " + result3 : "not found"));

        System.out.println("\n=== Advanced Binary Search Tests ===");

        // Test insertion point
        int insertTarget = 6;
        int insertPoint = findInsertionPoint(sortedArray, insertTarget);
        System.out.println("Insertion point for " + insertTarget + ": index " + insertPoint);

        // Test first and last occurrence with duplicates
        int duplicateTarget = 2;
        int firstOcc = findFirstOccurrence(arrayWithDuplicates, duplicateTarget);
        int lastOcc = findLastOccurrence(arrayWithDuplicates, duplicateTarget);
        System.out.println("First occurrence of " + duplicateTarget + ": index " + firstOcc);
        System.out.println("Last occurrence of " + duplicateTarget + ": index " + lastOcc);

        System.out.println("\n=== Generic Binary Search Test ===");

        // Test generic binary search with strings
        String searchName = "Charlie";
        int nameResult = binarySearch(names, searchName, String::compareTo);
        System.out.println("Search for \"" + searchName + "\": " +
                (nameResult != -1 ? "found at index " + nameResult : "not found"));

        System.out.println("\n=== Error Handling Test ===");

        // Test null array handling
        try {
            binarySearch(null, 5);
        } catch (IllegalArgumentException e) {
            System.out.println("Caught expected exception: " + e.getMessage());
        }

        // Display array contents for reference
        System.out.println("\nArray contents:");
        System.out.print("sortedArray: ");
        for (int i = 0; i < sortedArray.length; i++) {
            System.out.print(sortedArray[i] + (i < sortedArray.length - 1 ? ", " : ""));
        }
        System.out.println();

        System.out.print("arrayWithDuplicates: ");
        for (int i = 0; i < arrayWithDuplicates.length; i++) {
            System.out.print(arrayWithDuplicates[i] + (i < arrayWithDuplicates.length - 1 ? ", " : ""));
        }
        System.out.println();
    }
}
