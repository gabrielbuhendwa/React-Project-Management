export default function SelectedProject({project}){

    const formattedDate = new Date(project.dueDate).toLocaleDateString( 'en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
    <div className="W-[35rem] mt-16 flex items-center justify-between">
        <header className="pb-4 mb-4 border-b-2 border-stone-300 ">
            <div>
                <h1>{project.title}</h1>
                <button>Delete</button>
            </div>
            <p>{formattedDate}</p>
            <p>{project.description}</p>
        </header>
        TASKS
    </div>
    );
}