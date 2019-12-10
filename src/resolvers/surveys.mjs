import { getEntity } from '../helpers.mjs'

export default {
    Survey: {
        demographics: (survey, args, context, info) => ({
            participation: { survey },
            country: { survey },
            source: { survey },
            gender: { survey },
            salary: { survey },
            companySize: { survey },
            workExperience: { survey },
            jobTitle: { survey },
            cssProficiency: { survey },
            backendProficiency: { survey }
        }),
        tool: async (survey, { id }, context, info) => ({
            survey,
            id,
            entity: getEntity({ id }),
            experience: {
                survey,
                id
            }
        }),
        feature: async (survey, { id }, context, info) => ({
            survey,
            id,
            experience: {
                survey,
                id
            }
        }),
        opinion: async (survey, { id }, context, info) => {
            return {
                survey,
                id
            }
        },
        otherTools: async (survey, { id }, context, info) => {
            return {
                survey,
                id
            }
        },
        entity: async (survey, { id }, context, info) => {
            return {
                survey,
                ...getEntity({ id })
            }
        },
        resources: async (survey, { id }, context, info) => {
            return {
                survey,
                id
            }
        },
        category: async (survey, { id }, context, info) => {
            return {
                survey,
                id,
                happiness: {
                    survey,
                    id
                },
                workExperience: {
                    survey,
                    id
                },
                companySize: {
                    survey,
                    id
                },
                salary: {
                    survey,
                    id
                }
            }
        }
    }
}
