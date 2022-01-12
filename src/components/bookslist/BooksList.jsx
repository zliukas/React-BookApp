
   
import React from 'react'
import Book from '../book/Book';
import "./BooksList.css";

const BooksList = () => {
    return (
        <section id="books-list">

            <Book img="https://i.pinimg.com/736x/1e/60/7c/1e607cefc7e6ac7eaaec2c5f39229ddc.jpg" title="Don Quixote" author="Miguel de Cervantes Saavedra" description="Don Quixote has become so entranced by reading romances of chivalry that he determines to become a knight errant and pursue bold adventures, accompanied by his squire, the cunning Sancho Panza " price={10}/>
            <Book img="https://th.bing.com/th/id/R.3ee6ebf7aeddcd2fd75523c9703ce69c?rik=ektNlDMtzWSa%2bw&riu=http%3a%2f%2f3.bp.blogspot.com%2f-kpufBytZLKs%2fUjoxhZeUOYI%2fAAAAAAAAJ1s%2fsQ-06-swEck%2fs1600%2fCount%2bof%2bMonte%2bCristo.jpg&ehk=FFeJEShSkNeB3blWcrXHvCCIjPkPPhoF7muK9D5u3iY%3d&risl=&pid=ImgRaw&r=0" title="The Count of Monte Crist" author="Alexandre Dumas" description="Thrown in prison for a crime he has not committed, Edmond Dantes is confined to the grim fortress of If. There he learns of a great hoard of treasure hidden on the Isle of Monte Cristo and he becomes determined not only to escape, but also to unearth the treasure and use it to plot the destruction of the three men responsible for his incarceration. " price={20} />
            <Book img="https://m.media-amazon.com/images/I/51fKn8ZL0GL.jpg" title="Ozma of Oz " author=" L. Frank Baum" description="While being trapped in the basement of Mr. Mooney’s bookstore as a child, Joe had ample time to read. So, when he sees an original edition of Ozma of Oz at Peach Salinger’s party, he quickly steals the book, as it reminds him of his time in the basement. The story, the third of Baum’s Oz series, details Dorothy’s second trip to Oz." price={10} />
            <Book img="https://foliobooks.pl/wp-content/uploads/2015/07/9783836544924.png" title="Dalí. The Paintings" author="Gilles Neret, Robert Descharnes" description="Picasso called Dalí “an outboard motor that’s always running.” Dalí thought himself a genius with a right to indulge in whatever lunacy popped into his head. Painter, sculptor, writer, and filmmaker, Salvador Dalí (1904-1989) was one of the century’s greatest exhibitionists and eccentrics—and was rewarded with fierce controversy wherever he went. " price={15}/>
            <Book img="https://images-na.ssl-images-amazon.com/images/I/81iNrbILTgL.jpg" title="Crime and Punishment" author="Fyodor Dostoevsky" description="Raskolnikov, a destitute and desperate former student, wanders through the slums of St Petersburg and commits a random murder without remorse or regret. He imagines himself to be a great man, a Napoleon: acting for a higher purpose beyond conventional moral law." price={12} />
            <Book img="https://th.bing.com/th/id/R.1af9974d1332a14911b00c37b3e13810?rik=%2b8uq1BKbGAq8cQ&riu=http%3a%2f%2fbilder.buecher.de%2fprodukte%2f21%2f21431%2f21431549z.jpg&ehk=y4U7Uc95Ab1U%2bnxpom9cxDCntG208tcVL1LDl%2buB6oo%3d&risl=&pid=ImgRaw&r=0" title="Game of Thrones" author="George R. R. Martin" description="Nine noble families wage war against each other in order to gain control over the mythical land of Westeros. Meanwhile, a force is rising after millenniums and threatens the existence of living men." price={18} />
            <Book img="https://th.bing.com/th/id/R.ec4ebab0ff8e49c9edb31d8ae744dd80?rik=yY5oSVqpkVdW2w&pid=ImgRaw&r=0" title="Dune" author=" Frank Herbert" description="Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. " price={10 }/>
            <Book img="https://th.bing.com/th/id/OIP.8LPxqTvPFvkgPax6lRcYPwHaKe?pid=ImgDet&rs=1"title="The Hobbit" author=" J. R. R. Tolkien" description="The Hobbit is a film series consisting of three high fantasy adventure films directed by Peter Jackson. The three films are The Hobbit: An Unexpected Journey, The Hobbit: The Desolation of Smaug, and The Hobbit: The Battle of the Five Armies. " price={19} />
        
        </section>
    )
}
export default BooksList;