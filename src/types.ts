export interface Card {
  id: number;
  front: string; // Kanji
  back: string;  // Reading (kana) + Romaji + Meaning (Uzbek/English)
}

export interface DeckGroup {
  id: string;
  title: string;
  level: string;
  startIndex: number;
  endIndex: number;
  cardCount: number;
}
