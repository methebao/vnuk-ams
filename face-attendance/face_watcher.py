from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler

import time

import pathlib
from glob import glob

import cv2
import json
import os

import face_recognitioner


def recognize_faces():
    try:

        face_recognitioner.handle()

    except Exception as inst:
        print ("error:", inst)


class Watcher:
    DIRECTORY_TO_WATCH = "./pictures/raw"

    def __init__(self):
        self.observer = Observer()

    def run(self):
        event_handler = Handler()
        self.observer.schedule(event_handler, self.DIRECTORY_TO_WATCH, recursive=True)
        self.observer.start()
        try:
            while True:
                time.sleep(5)
        except:
            self.observer.stop()
            print ("Error")

        self.observer.join()


class Handler(FileSystemEventHandler):

    @staticmethod
    def on_any_event(event):
        recognize_faces()


if __name__ == '__main__':

    w = Watcher()
    w.run()
