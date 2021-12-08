import express from 'express'
import puppeteer from 'puppeteer'
import Zombie from 'zombie'

import createApp from './app.js'

const app = createApp(express, puppeteer, Zombie)

app.listen(process.env.PORT || 3000)

