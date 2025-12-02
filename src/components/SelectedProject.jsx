export default function SelectedProject({project}){

    const formattedDate = new Date(project.dueDate).toLocaleDateString( 'en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
    <div>
        <header>
            <div>
                <h1>{project.title}</h1>
                <button>Delete</button>
            </div>
            <p>DATE</p>
            <p>DESCRIPTION</p>
        </header>
        TASKS
    </div>
    );
}