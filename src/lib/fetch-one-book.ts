import { BookData } from "@/types";

export default async function fetchOneBook(
  id?: number
): Promise<BookData | null> {
  const url = `https://onebite-books-server-dun.vercel.app/book/${id}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching book:", error);
    return null;
  }
}
