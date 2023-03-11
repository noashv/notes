export default function Note({ text }: {text: string}) {
    return (
        <div className="bg-slate-800 h-52 p-6 rounded-lg">
        {text}
        </div>
    )

}