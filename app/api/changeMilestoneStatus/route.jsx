export async function PUT(req) {
    try {
        await connectMongoDB();
        const { title, changedElement, changeValueTo } = await req.json();
        let mission;
        switch (changedElement){
            case "title":
                mission = await Mission.findOneAndUpdate({title: title}, {title: changeValueTo});
                break;
            case "startDate":
                mission = await Mission.findOneAndUpdate({title: title}, {startDate: changeValueTo});
                break;
            case "length":
                mission = await Mission.findOneAndUpdate({title: title}, {length: changeValueTo});
                break;
            case "status":
                mission = await Mission.findOneAndUpdate({title: title}, {status: changeValueTo});
                break;
            default:
                console.log("No such element exists");
                break;
        }
        console.log("updated missions: ", mission);
        return NextResponse.json({ mission });
    } catch (error) {
        console.log(error);
    }
}