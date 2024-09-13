import mongoose,{Schema} from "mongoose"
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2"

const videSchema = new Schema(
    {
        videoFile: {
            type: string ,//cludeinary url 
            required: true,

        },
        thumbnill: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        duration: {
            type: Number,
            required: true
        },
        view: {
            type: Number,
            defualt: 0,  
        },
        isPublished: {
            type: String,
            required: true
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    },{timestamps: true}
)

// videSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("Video",videSchema)