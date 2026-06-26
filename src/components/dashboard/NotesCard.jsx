import { useStore } from "../../store/useStore";

const NotesCard = () => {
  const notes = useStore((state) => state.notes);
  const setNotes = useStore((state) => state.setNotes);

  return (
    <div className="w-[390px] h-[445px] bg-[#F2C95D] rounded-[20px] overflow-hidden">

      <div className="notes-card">

        <h2 className="text-[24px] font-bold text-black">
          All notes
        </h2>

      </div>

      <div className="h-[16px]" />

      <div className="notes-textarea h-[360px]">

        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Write your notes..."
          className="
            w-full
            h-full
            bg-transparent
            border-none
            outline-none
            resize-none
            overflow-y-auto
            text-[15px]
            leading-[1.7]
            text-[#2E2E2E]
            pr-[8px]
          "
        />

      </div>

    </div>
  );
};

export default NotesCard;