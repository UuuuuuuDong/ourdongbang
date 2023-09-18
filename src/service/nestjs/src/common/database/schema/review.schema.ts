import { Prop, Schema, SchemaFactory, SchemaOptions } from '@nestjs/mongoose';
import mongoose, { Document, Types } from 'mongoose';
import { User } from './user.schema';
import { ApiProperty } from '@nestjs/swagger';

const schemaOptions: SchemaOptions = {
	timestamps: true,
	collection: 'reviews',
};

@Schema(schemaOptions)
export class Review {
	@Prop({
        type: Types.ObjectId,
        ref: 'clubs',
        required: true,
        unique: true,
    })
    @ApiProperty({ description: 'club ID', example: '37fafa4d2ca3382535816679' })
    clubId: Types.ObjectId;

    @Prop({
        type: Types.ObjectId,
        ref: 'users',
        required: false,
        unique: true,
    })
    @ApiProperty({ description: 'user ID', example: '37fafa4d2ca3382535816679' })
    userId: Types.ObjectId;

    @Prop({
        type: String,
        required: true,
    })
    @ApiProperty({ description: '내용', example: '동아리가 너무 활동적이고 재밌어요!!' })
    content: string;

    @Prop({
        type: [String],
        required: false,
    })
    @ApiProperty({ description: 'tag', example: ['#운동', '#재미', '#가족같은분위기'] })
    tags: string[];

    @Prop({
        type: Number,
        required: true,
    })
    @ApiProperty({ description: '평점', example: 5 })
    rate: Number;
}

export type ReviewDocument = Review & Document;
export const ReviewSchema = SchemaFactory.createForClass(Review);