function BasicCard(front, back) {
    this.front = front;
    this.back = back;
}

var card = new BasicCard("Who wrote The Great Gatsby?", "F. Scott Fitzgerald");
//Who wrote The Great Gatsby?
console.log(card.front);
//F. Scott Fitzgerald.
console.log(card.back);

function ClozeCard(text, cloze, full) {
    this.text = text;
    this.cloze = cloze;
    this.full = full;
}
//Adding three properties to ClozeCard constructor
ClozeCard.prototype.partial = function() {
    console.log("Front of flashcard: " + this.text);
};

ClozeCard.prototype.answer = function() {
    console.log("Back of flashcard: " + this.cloze);
};

ClozeCard.prototype.complete = function() {
    console.log(this.full);
};

var card2 = new ClozeCard("... wrote Don Quixote?", "Miguel de Cervantes", "Miguel de Cervantes wrote Don Quixote.");
//.. wrote Don Quixote
card2.partial();
//Miguel de Cervantes
card2.answer();
//Miguel de Cervantes wrote Don Quixote.
card2.complete();
