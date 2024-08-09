export default function TournamentTable(props) {
    const currentTournaments = props.user.userData.yourTournaments;

    return <>
        <div className="border-white border-2 mt-5 w-full h-[475px] rounded-lg bg-white">
            <table>
                <tbody>
                    <tr>
                        <td>Name:</td>
                        <td>Game:</td>
                        <td>players</td>
                    </tr>
                    {
                        currentTournaments.map((item, i) => {
                            <tr key={i}>
                                <td>{item.tournamentName}</td>
                                <td>{item.Game}</td>
                                <td>{item.minimumplayers}/{item.maximumplayers}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    </>
}