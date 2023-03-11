import Note from "../../../components/note/note";

async function fetchNotes () {
    const res = await fetch('http://localhost:3000/notes', {cache:'no-store'})
    const data = await res.json();

    return data as any[]; 
}

export default async function NotesPage() {
    const notes = await fetchNotes();

    return(
        <div>
            <div className='grid grid-cols-4 gap-8'>
                {notes?.map((note) => {
                    return <Note key={note.id} text={note.text}/>
                })}
            </div>
        </div>
    )
}