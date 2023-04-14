import {createClient} from '@sanity/client'

export const client = createClient({
    projectId: "evbo97zr",
    dataset: "production",
    useCdn: true,
    apiVersion: "2021-10-21"
})

export const writeClient = createClient({
    token: "skBd3PKZC5aJAWhJ2WYTHzgd3p80yYbHndXyM5jPhC5VaQUCLoXCH8iEo2aA7doe82YjRBJnhP5Qfsh2oAuN51YaoEaxg7g98lJ06cfTQM11lE3yCZBVtoMURmTu7I6AtHmlQPzhUgLDeFoU8xnbcHI8r6yCb57s9RqWE0K68hop1Ip97Tww",
    projectId: "evbo97zr",
    dataset: "production"
})