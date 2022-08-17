import shuffle from "just-shuffle";

export const makeADraft = (participants: string[])=>{
  const totalParticipants = participants.length;

    const shuffled = shuffle(participants);

    const result = new Map<string,string>()

    for (let i = 0; i < participants.length; i++) {
      
      const indexOfFriend = i === (totalParticipants - 1) ? 0 : i + 1;
      result.set(shuffled[i], shuffled[indexOfFriend])
    }

    return result;
}